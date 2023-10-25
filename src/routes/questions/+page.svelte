<script lang="ts">
    export let data: import('./$types').PageData
</script>

<h1>Questions</h1>
<ul>
    {#each data.questions as question, i}
        <li>{i}. <a href = {`/questions/${question.id}`}>{question.title}</a> ({question.difficulty})</li>
    {/each}
</ul>