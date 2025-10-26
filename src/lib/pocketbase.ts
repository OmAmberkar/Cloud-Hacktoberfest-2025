import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

// to restore auth from localstorage 
pb.authStore.loadFromCookie(document.cookie);

pb.authStore.onChange(() => {
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
})


export default pb ;