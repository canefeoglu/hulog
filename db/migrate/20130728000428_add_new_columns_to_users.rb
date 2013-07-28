class AddNewColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :fb_image_url, :text
    add_column :users, :gender, :string
  end
end
