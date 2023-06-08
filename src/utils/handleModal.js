export function openModal(type) {
    const modal = document.querySelector(`dialog[data-type="${type}"]`);
    modal.showModal();
}

export function closeModal(type) {
    const modal = document.querySelector(`dialog[data-type="${type}"]`);
    modal.close();
}
