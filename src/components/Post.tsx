import Editor, { EditorContext } from "@bobaboard/boba-editor";

const REMOTE_EMBEDS_URL = `https://boba-embeds.herokuapp.com/iframely`;
const getOEmbedFromUrl = (url: string) => {
  // We add a random number to the embed load to get around https://github.com/itteco/iframely/issues/281
  return fetch(`${REMOTE_EMBEDS_URL}?url=${url}&random=${Math.random()}`).then(
    (response) => response.json()
  );
};

export default function Post(post) {
  return (
    <EditorContext.Provider
      value={{
        fetchers: {
          getOEmbedFromUrl,
        },
      }}
    >
      <Editor key={post.id} initialText={post.initialText} />
    </EditorContext.Provider>
  );
}
