import { createContext, useContext, useState } from "react";

const WishlistContext = createContext<any>(null);


export function WishlistProvider({ children }: any) {

  const [savedRooms, setSavedRooms] = useState<any[]>([]);


  const toggleSave = (room: any) => {

    setSavedRooms((prev) => {

      const alreadySaved = prev.find(
        (item) => item.id === room.id
      );


      if (alreadySaved) {
        return prev.filter(
          (item) => item.id !== room.id
        );
      }


      return [...prev, room];

    });

  };


  return (

    <WishlistContext.Provider
      value={{
        savedRooms,
        toggleSave,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}


export function useWishlist() {

  return useContext(WishlistContext);

}