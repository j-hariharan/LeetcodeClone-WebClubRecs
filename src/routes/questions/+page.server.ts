import { questions } from "$lib/server/db"
import CreateQuestionBrief from "$lib/models/QuestionBrief"

/** @type {import('./$types').PageLoad} */
export async function load () {
    let qs = await questions.limit(20).get()
    let data = qs.docs.map(CreateQuestionBrief)

    return { questions: data }
}