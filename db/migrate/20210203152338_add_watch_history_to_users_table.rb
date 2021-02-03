class AddWatchHistoryToUsersTable < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :watch_history, :integer, array: true, default: []
  end
end
