<script lang="ts">
	import user from "$lib/user"
	import { getAuth } from "firebase/auth"

    let auth = getAuth()

    async function logout () {
        await auth.signOut()
    }
</script>

<h1>Welcome to Leetcode Clone</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if $user}
    <a href="/questions">Start solving!</a>
    <button on:click = {logout}>Logout</button>
{:else}
    <a href="/login">Log in here!</a>
{/if}