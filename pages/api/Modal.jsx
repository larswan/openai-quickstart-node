import styled from 'styled-components'

const ModalBackground = style.div''
const ModalBody = style.div''

export const Modal = ({children}) => {
    const [shouldShow, setShouldShow] = useState(false);

    return(
        <>
        <button onClick ={() =>setShouldShow(true)} >Show Modal</button>
        {shouldShow && (
            <ModalBackground onClick={()=>setShouldShow(false)}>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalBackground>
        )}

        </>
    )
}