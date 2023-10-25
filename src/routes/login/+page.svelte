<script lang = "ts">
	import { goto } from "$app/navigation"
	import user from "$lib/user"
    import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

    let auth = getAuth()

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