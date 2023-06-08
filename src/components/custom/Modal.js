import { closeModal } from "../../utils/handleModal";

export default function Modal({ children, type }) {
    return (
        <dialog
            data-type={type}
            className="w-full max-w-lg ml-auto h-full relative z-50 max-h-full overflow-visible"
        >
            <div className="relative">
                <p
                    className="absolute left-0 top-0 -translate-x-full z-[100] hover:cursor-pointer"
                    onClick={() => closeModal("new opportunity")}
                >
                    close
                </p>
                {children}
            </div>
        </dialog>
    );
}
