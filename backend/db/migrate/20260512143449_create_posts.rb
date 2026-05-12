class CreatePosts < ActiveRecord::Migration[8.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.date :date
      t.string :prefecture
      t.string :tag

      t.timestamps
    end
  end
end
