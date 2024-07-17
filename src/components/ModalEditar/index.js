

function ModalEditar ({id}) {
    return (
        <>
        <dialog open={!!id}>
            <form method='dialog'>
                <button type='submit'>ok</button>
            </form>
        </dialog>
        </>
    )
}

export default ModalEditar;