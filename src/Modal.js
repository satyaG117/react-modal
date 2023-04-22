import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ visible, title, body, onClose }) {
    if (!visible) return null
    return ReactDOM.createPortal(
        <>
            <div className='overlay'>
                <div className="card my-modal p-3">
                    <h3 className="card-title">{title}</h3>
                    <hr/>
                    <div className="card-body">
                        {body}
                    </div>
                    <div className="btn-grp">
                        <button className='btn btn-sm btn-secondary' onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>

        </>,
        document.getElementById('modal-root')

    )

}
