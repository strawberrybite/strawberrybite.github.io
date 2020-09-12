for (let x of document.querySelectorAll('body[data-strawberry-bite] > [data-modal] > div > form > div:first-child > button')) {
    x.onclick = e => {
        let target = e.target;
                
        while (target instanceof HTMLElement) {
            if (target.dataset.modal !== undefined) {
                target.style.display = 'none';
                break;
            }

            target = target.parentElement;
        }
    };
}
            
for (let x of document.querySelectorAll('body[data-strawberry-bite] button[data-modal-show]')) {
    x.onclick = e => {
        document.querySelector(`body[data-strawberry-bite] > [data-modal="${e.target.dataset.modalShow}"]`).style.display = 'block';
    };
}