export interface UpdatePostRequest {
    id: string | undefined;
    title: string | undefined;
    content: string | undefined;
    summary: string | undefined;
    urlHandel: string | undefined;
    author: string | undefined;
    visible: boolean | undefined;
    publishDate: string | undefined;
    updatedDate: string | undefined;
    featuredImageUrl: string | undefined;
}