import type { Note } from "../types/note"
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function NotesList({ list, onNoteClick, onEditClick, handleRemove }: { list: Note[], onNoteClick: (note: Note) => void, onEditClick: (note: Note) => void, handleRemove: (id: string) => void }) {
    return (
        <div className="flex gap-2 flex-col">
            {list.map((note) => (
                <div
                    className="border-[#D9D9D9] border shadow-md flex w-full p-4 rounded-xl justify-between cursor-pointer"
                    key={note._id}
                    onClick={() => onNoteClick(note)}
                >
                    <h3 className="text-md font-semibold">{note.title}</h3>
                    <div className="flex gap-2">
                        <EditIcon
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                onEditClick(note)
                            }}
                        />
                        <DeleteIcon
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(note._id);
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NotesList;