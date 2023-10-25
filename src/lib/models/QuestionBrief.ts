import type { DocumentSnapshot } from "firebase-admin/firestore";

interface QuestionBrief {
    id: string
    title: string
    difficulty: "easy" | "medium" | "hard"
    tags: string[]
}



export default function CreateQuestionBrief (doc: DocumentSnapshot) : QuestionBrief {
    return {
        id: doc.id, 
        title: doc.get("title"), 
        difficulty: doc.get("difficulty"), 
        tags: doc.get("tags")
    }
}
