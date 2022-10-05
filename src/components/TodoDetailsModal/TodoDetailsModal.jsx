import './TodoDetailsModal.css';
import Modal from '../../components/Modal/Modal';

import React from 'react'

function TodoDetailsModal({todo, closeModal}) {
    return (
        <Modal closeModal={closeModal}>
            <div className="TodoDetailsModal">
                <div>
                    <div className="TodoDetailsModal__title">{todo.title}</div>
                </div>
            </div>
        </Modal>
    );
}

export default TodoDetailsModal;