import React, {Component} from 'react';
import {Input, Textarea} from './../components/input.js';
import BodyText from './../components/paragraph.js';
import Button from './../components/button.js';

class Contact extends Component {
    render() {
        return (
            <section className="Contact">
                <div className="">
                    <BodyText text="Reach me via my socials or send me a message using the contact form below." />
                </div>
                <div>
                    <form>
                        <Input label="First Name" type="text" name="firstname" placeholder="Alexa" required="true" />
                        <Input label="Last Name" type="text" name="lastname" placeholder="Sandler" required="true" />
                        <Input label="Email" type="email" name="email" placeholder="hello@stranger.com" required="true" />
                        <Input label="First Name" type="text" name="firstname" placeholder="Alexa Sandler" required="true" />
                        <Textarea label="Message" rows="5" name="firstname" placeholder="Alexa Sandler" required="true" />
                        <Button type="submit" label="Send" />
                        {/* <Input label="" type="" name="" placeholder="" required="" /> */}
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;