import React, {useContext} from "react";
import {User, Guest} from "./useContextMain";


const useContextC = () => {
    const username = useContext(User);
    
    return <div>useContextC : Instead we can use: {username}
    {/* <User.Consumer>
      {
        username => {
            return (
                <Guest.Consumer>
                    {
                    guestName => {
                        return <h3>Username: {username}, Guest: {guestName}</h3>
                    }
                    }
                </Guest.Consumer>
            )
        }
      }
    </User.Consumer> */}
  </div>;
};

export default useContextC;
