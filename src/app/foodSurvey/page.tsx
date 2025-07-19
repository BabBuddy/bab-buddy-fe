import { redirect } from 'next/navigation'

export default function FoodSurveyPage() {
	// /foodSurvey 접근 시 첫 번째 단계로 리다이렉트
	redirect('/foodSurvey/1')
}
