// actions/action_select_contact.js
function selectContact(contact) {
    return {
        type: 'CONTACT_SELECTED',
        payload: contact
    }
}
export default selectContact;