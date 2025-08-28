Don't put images to the `public` folder, because with `basePath` you need to prefix these images.
- https://github.com/vercel/next.js/issues/81259#issuecomment-3037296094
- https://github.com/vercel/next.js/discussions/34173

Instead, just import images and use in `src`:

```ts
import Image from 'next/image'
import ProfileImage from './profile.png'
 
export default function Page() {
  return (
    <Image src={ProfileImage} />
  )
}
```