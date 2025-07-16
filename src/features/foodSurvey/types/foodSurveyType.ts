export type TasteIconType =
	| 'taste_mild'
	| 'taste_plain'
	| 'taste_spicy'
	| 'taste_staple'
	| 'taste_unique'

export type FoodIconType =
	| 'food_fish'
	| 'food_greasy'
	| 'food_heavy'
	| 'food_none'
	| 'food_salty'
	| 'food_soupy'

export type RestaurantIconType =
	| 'restaurant_chinese'
	| 'restaurant_global'
	| 'restaurant_italian'
	| 'restaurant_japanese'
	| 'restaurant_korean'

export type FoodSurveyIconType = TasteIconType | FoodIconType | RestaurantIconType
