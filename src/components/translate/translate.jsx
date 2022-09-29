

export const PopAddContact = () => {
    return( 
        <div className="contact_menu">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Language</Form.Label>
            <Form.Control type="friendcode" placeholder="Enter Friend Code" />
            <Form.Text className="text-muted">
            Insert the code of another user to add your friend. Remember do not share a code with another unknown person.
            </Form.Text>
            </Form.Group>
                <button type="button" class="nes-btn is-success">+Add</button>   
        </div>
     )
}