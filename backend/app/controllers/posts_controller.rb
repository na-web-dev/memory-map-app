class PostsController < ApplicationController
    # 新規作成
    def create
        # パラメータ取得し、DB登録実行
        post = Post.create(title: params[:title], content: params[:content], prefecture: params[:prefecture], tag: params[:tag], date: params[:date])
        # ブラウザに処理結果を返却
        render json: post
    end

    # 一覧取得
    def index
        # 全件取得(JSON形式)
        render json: Post.all
    end
end
