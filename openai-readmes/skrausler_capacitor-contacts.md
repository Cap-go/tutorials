# Info

only implemented the android part at the moment

# Use

npm install capacitor-contacts\
ionic capacitor sync\
ionic capacitor run android

# Code Example Select

<pre><code>
import {ContactsWeb} from 'capacitor-contacts';

const contactsService = Plugins.Contacts as ContactsWeb;
contactsService.getPermissions().then(() => {
    this.permissionsGranted = true;
    zip(from(contactsService.getContacts()).pipe(map((contactsResult) => {
        for (const contact of contactsResult.contacts) {
            if (contact.birthday) {
                contact.birthday = new Date(contact.birthday);
            }
        }
        return contactsResult.contacts;
    })), from(contactsService.getGroups()).pipe(map((groupsResult) => {
        return groupsResult.groups;
    })), from(contactsService.getContactGroups()))
        .subscribe(([contacts, groups, contactGroups]) => {
            this.contacts = contacts;
            this.groups = groups;
            this.contactGroups = contactGroups;
        });
</pre></code>

#Code Example Delete

<pre><code>
const contacts = Plugins.Contacts as ContactsWeb;
contacts.deleteContact(duplicate.duplicate).then(() => {
    ... success
});
</pre></code>

# Publish a new version

Increase version number of this plugin in package.json.
Run "npm publish" to export to npm repo.
