# youtubeSample
GooglePlatformDataのYoutubeDataApiを利用して、検索キーワードを入力してYoutubeのサムネイル情報を取得する様にしました

## 画面の操作
- テキストフィールドに値を入力
- 入力された値に紐付くYoutube動画を検索してサムネイルで表示
- 検索されたYoutubeのサムネイル動画をリストで履歴として表示
- 入力された値をログDBとして登録

## その他
- YoutubeAPIKeyのキーは登録していないため、別途作成して".env.local"ファイルに記載すること
   - 登録方法
     - http://piyohiko.webcrow.jp/kids_tube/help/index.html
- ログ登録APIはspringで別途実装
  - https://github.com/Kei0327megane/YoutubeLogInsert