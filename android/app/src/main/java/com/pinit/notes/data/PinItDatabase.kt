package com.pinit.notes.data

import androidx.room.*
import kotlinx.coroutines.flow.Flow

@Entity(tableName = "notes", indices = [Index("parentId"), Index("trashId")])
data class NoteEntity(
    @PrimaryKey val id: String, val parentId: String?, val trashId: String?,
    val position: Int, val title: String, val content: String, val archived: Boolean,
    val pinned: Boolean, val pinnedAt: Long?, val sortOrder: Int, val createdAt: Long?,
    val updatedAt: Long?, val recordVersion: Long, val nodeJson: String
)
@Entity(tableName = "note_content", primaryKeys = ["noteId", "part"], foreignKeys = [ForeignKey(entity = NoteEntity::class, parentColumns = ["id"], childColumns = ["noteId"], onDelete = ForeignKey.CASCADE)])
data class ContentChunkEntity(val noteId: String, val part: Int, val text: String)
@Entity(tableName = "trash")
data class TrashEntity(@PrimaryKey val id: String, val parentId: String, val deletedAt: Long, val metadataJson: String)
@Entity(tableName = "app_state")
data class AppStateEntity(@PrimaryKey val id: Int = 1, val revision: Long, val preferencesJson: String)
@Entity(tableName = "overlays")
data class OverlayEntity(
    @PrimaryKey val noteId: String, val xFraction: Float = .85f, val yFraction: Float = .65f,
    val widthDp: Int = 460, val heightDp: Int = 420, val panelXFraction: Float = .75f, val panelYFraction: Float = .35f, val active: Boolean = false, val expanded: Boolean = false
)
@Entity(tableName = "migrations")
data class MigrationEntity(@PrimaryKey val sha256: String, val recoveredFile: String, val completedAt: Long)

@Dao
interface PinItDao {
    @Query("SELECT * FROM notes") suspend fun notes(): List<NoteEntity>
    @Query("SELECT * FROM notes WHERE id = :id") suspend fun note(id: String): NoteEntity?
    @Query("SELECT * FROM note_content ORDER BY noteId, part") suspend fun contentChunks(): List<ContentChunkEntity>
    @Insert suspend fun putContent(chunks: List<ContentChunkEntity>)
    @Query("DELETE FROM note_content WHERE noteId IN (:ids)") suspend fun deleteContent(ids: List<String>)
    @Query("SELECT * FROM trash") suspend fun trash(): List<TrashEntity>
    @Query("SELECT * FROM app_state WHERE id=1") suspend fun state(): AppStateEntity?
    @Query("SELECT revision FROM app_state WHERE id=1") fun revisions(): Flow<Long?>
    @Upsert suspend fun putNotes(notes: List<NoteEntity>)
    @Query("DELETE FROM notes WHERE id IN (:ids)") suspend fun deleteNotes(ids: List<String>)
    @Upsert suspend fun putTrash(trash: List<TrashEntity>)
    @Query("DELETE FROM trash WHERE id IN (:ids)") suspend fun deleteTrash(ids: List<String>)
    @Upsert suspend fun putState(state: AppStateEntity)
    @Query("DELETE FROM overlays WHERE noteId=:id") suspend fun deleteOverlay(id: String)
    @Query("SELECT * FROM overlays") suspend fun overlays(): List<OverlayEntity>
    @Query("SELECT * FROM overlays") fun observeOverlays(): Flow<List<OverlayEntity>>
    @Upsert suspend fun putOverlay(overlay: OverlayEntity)
    @Query("UPDATE overlays SET active=0, expanded=0") suspend fun stopOverlays()
    @Query("SELECT * FROM migrations WHERE sha256=:hash") suspend fun migration(hash: String): MigrationEntity?
    @Insert(onConflict = OnConflictStrategy.IGNORE) suspend fun putMigration(migration: MigrationEntity)
}

@Database(entities = [NoteEntity::class, ContentChunkEntity::class, TrashEntity::class, AppStateEntity::class, OverlayEntity::class, MigrationEntity::class], version = 1, exportSchema = true)
abstract class PinItDatabase : RoomDatabase() { abstract fun dao(): PinItDao }
