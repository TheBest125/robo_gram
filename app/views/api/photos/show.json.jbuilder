json.id @photo.id
json.username @photo.user.username
json.avatar asset_path(@photo.user.avatar.url)
json.image_url asset_path(@photo.image.url)
json.caption @photo.caption
json.created_at @photo.created_at
json.created_at_month @photo.created_at.month
json.created_at_day @photo.created_at.day
