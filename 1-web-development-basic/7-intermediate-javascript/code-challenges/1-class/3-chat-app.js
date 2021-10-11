// A chat apps named SkilChat takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.
// Create a class SkilChat that takes the numerical value of the shift as a constructor parameter. The class should have two methods:
// - encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
// - decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

class SkilChat{
    constructor(shift){
        this.shift = shift;
        this.dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.validation = new RegExp (/[a-zA-Z]/);
    }
    encrypt(string){
        let result = "";
        for(let i = 0; i < string.length; i++){
            if(this.validation.test(string[i])){
                let currentPos = this.dict.search(string[i].toUpperCase())
                if(currentPos + this.shift > 25){
                    result += this.dict[currentPos+this.shift-26];
                } else{
                    result += this.dict[currentPos+this.shift];
                }
            } else{
                result += string[i];
            }
        }
        return result;        
    }
    decrypt(string){
        let result = "";
        for(let i = 0; i < string.length; i++){
            if(this.validation.test(string[i])){
                let currentPos = this.dict.search(string[i].toUpperCase());
                if(currentPos - this.shift < 0){
                    result += this.dict[currentPos-this.shift+26].toLowerCase();
                } else{
                    result += this.dict[currentPos-this.shift].toLowerCase();
                }
            } else{
                result += string[i];
            }
        }
        return result;
    }
}

const mySkilChat = new SkilChat(2);
mySkilChat.encrypt('I love JavaScript!');
mySkilChat.decrypt('K <3 OA ECV'); 
