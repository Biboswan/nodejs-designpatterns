// adapter is used to connect two or more things which can’t be connected with original sockets.

import { uuidv4 } from "uuid";

class uuid {
    generate() {
        return uuidv4();
    }
}


export default new uuid();

/**
    We can define its structure, and which standards it follows. But what is most important we have single point of injection for 3rd party library or any other code which we do not want to leak into our main code.
*/
