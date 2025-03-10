const chaiModule = require("chai");
const expect = chaiModule.expect;

const {
    addNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
} = require("../functions/notes");

describe("Tests fonctionnels de bout en bout", () => {
    beforeEach(() => {
        while (getAllNotes().length) getAllNotes().pop();
    });

    it("devrait fournir une expérience complète utilisateur", () => {
        const note = addNote("Shopping", "Acheter du lait");
        expect(getAllNotes()).to.have.lengthOf(1);

        updateNote(note.id, "Shopping List", "Acheter du lait et du pain");
        expect(getNoteById(note.id).content).to.include("pain");

        deleteNote(note.id);
        expect(getAllNotes()).to.be.empty;
    });
});
