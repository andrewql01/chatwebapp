import React from 'react';
import SignOut from './SignOut';
const ChatComponent = () =>{
    return(
    <>
        <SignOut/>
        <div className="placeInputDiv">
            <form className="inputForm">
                <input type="text" className="inputChat" name="inpChat"/>
                <button className="submitChatButton" name="submitChat">
                    <i className="icon fa fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </>
    );
}
export default ChatComponent;