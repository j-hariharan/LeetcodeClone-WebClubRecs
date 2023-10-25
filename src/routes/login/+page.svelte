<script lang = "ts">
	import { goto } from "$app/navigation"
	import auth from "$lib/auth"
	import user from "$lib/user"
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    let loading = false, error = false
    $: if ($user) goto("/")

    async function login () {
        const provider = new GoogleAuthProvider();
        
        try {
            loading = true
            error = false
            let result = await signInWithPopup(auth, provider)
            loading = false
        } catch {
            loading = false
            error = true
        }

    }
</script>

<button on:click = {login}>Login with Google</button>

{#if loading}
    Loading...
{/if}
{#if error}
    Error...
{/if}