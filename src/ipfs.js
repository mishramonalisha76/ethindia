import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3NzYwNWI4NTQxOTE2NEQyRkQ3ZTRBNzE5M2EyMDA4NzU5RjA2NjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDk4NDE5OTAsIm5hbWUiOiJzdG9yYWdlIn0.WUC6MmkaNmp-PYh1hRLIT0fjVFNqilB-WAAeLS--_2s'
}

export function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

export function jsonFile(filename, obj) {
    return new File([JSON.stringify(obj)], filename)
  }