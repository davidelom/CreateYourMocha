const chaiModule = require("chai");
const expect = chaiModule.expect;

const {
    addNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
} = require("../functions/notes");

describe("addNote()", () => {
    it("devrait ajouter une note avec un id unique", () => {
        const note = addNote("Test", "Contenu du test");
        expect(note).to.have.property("id");
        expect(note.title).to.equal("Test");
        expect(note.content).to.equal("Contenu du test");
    });
});

describe("getNoteById()", () => {
    it("devrait récupérer une note spécifique par id", () => {
        const note = addNote("Titre", "Contenu");
        const fetchedNote = getNoteById(note.id);
        expect(fetchedNote).to.deep.equal(note);
    });

    it("devrait renvoyer undefined si l'id n'existe pas", () => {
        expect(getNoteById(999)).to.be.undefined;
    });
});

describe("updateNote()", () => {
    it("devrait mettre à jour une note existante", () => {
        const note = addNote("Ancien Titre", "Ancien contenu");
        updateNote(note.id, "Nouveau Titre", "Nouveau contenu");
        const updatedNote = getNoteById(note.id);
        expect(updatedNote.title).to.equal("Nouveau Titre");
        expect(updatedNote.content).to.equal("Nouveau contenu");
    });

    it("devrait renvoyer undefined si la note n'existe pas", () => {
        const result = updateNote(999, "Titre", "Contenu");
        expect(result).to.be.undefined;
    });
});

describe("deleteNote()", () => {
    it("devrait supprimer une note existante", () => {
        const note = addNote("Titre", "Contenu");
        const deletedNote = deleteNote(note.id);
        expect(deletedNote).to.deep.equal(note);
        expect(getNoteById(note.id)).to.be.undefined;
    });

    it("devrait renvoyer null si la note à supprimer n'existe pas", () => {
        const result = deleteNote(999);
        expect(result).to.be.null;
    });
});
