class CreatePracticeNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :practice_notes do |t|

      t.timestamps
    end
  end
end
