# Angular-CLI UrlSubdir

ビルド先をサブディレクトリにしてURLもそれに合わせる設定
```
ng build --output-path=./dist/sub --base-href=/sub/
```
```
ng build-prod --output-path=./dist/sub --base-href=/sub/
```

Browser Syncでビルドしたものをプレビュー
```
npm run browser-sync
```

http://localhost:3000/sub/にアクセスして確認