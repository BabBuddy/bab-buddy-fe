import React, { useState } from 'react'
import Icon from '@/shared/components/Icon'

const DislikedFoodSurvey: React.FC = () => {
	const [selectedFoods, setSelectedFoods] = useState<string[]>([])
	const [inputValue, setInputValue] = useState('')

	const handleToggle = (food: string) => {
		setSelectedFoods((prev) =>
			prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food],
		)
	}

	const handleAddFood = () => {
		if (selectedFoods.length >= 20) {
			return
		}
		if (inputValue.trim() && !selectedFoods.includes(inputValue.trim())) {
			setSelectedFoods((prev) => [...prev, inputValue.trim()])
			setInputValue('')
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleAddFood()
		}
	}

	return (
		<div className="flex-1">
			<main className="mx-auto flex h-[calc(100vh-110px)] w-full max-w-5xl flex-1 flex-col items-center gap-[48px] overflow-auto pb-[90px]">
				{/* 상단 제목 */}
				<div className="flex h-[82px] flex-col items-center gap-4">
					<div className="text-h2-bold text-center">특별히 싫어하시는 음식이 있으신가요?</div>
					<div className="text-b2-medium text-gray-30 mb-8 h-[54px] text-center">
						(결과에서 제외될 음식을 20개까지 등록 가능합니다.)
					</div>
				</div>

				<div className="flex h-full w-full flex-1 items-end gap-4">
					{/* 왼쪽 버튼 */}
					<div className="flex h-full flex-col justify-end">
						<button className="text-orientation-mixed text-orange bg-transparent font-medium">
							건너뛰기
						</button>
					</div>

					{/* 중앙 컨텐츠 */}
					<div className="flex h-full w-full flex-1 flex-col overflow-y-auto">
						{/* 음식 입력 필드 */}
						<div className="mb-8">
							<div className="flex items-center gap-[20px]">
								<div className="flex-1">
									<input
										type="text"
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										onKeyPress={handleKeyPress}
										placeholder="싫어하는 음식을 입력해주세요 (예: 브로콜리)"
										className="text-b1-medium w-full rounded-full border border-gray-300 px-6 py-4 placeholder-gray-400 focus:border-orange-500 focus:outline-none"
									/>
								</div>
								<button
									onClick={handleAddFood}
									disabled={!inputValue.trim()}
									className={`bg-orange flex h-14 w-[90px] items-center justify-center rounded-[24px] text-white ${
										inputValue.trim() ? '' : 'cursor-not-allowed opacity-[0.5]'
									}`}
								>
									<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* 현재 등록된 싫어하는 음식 */}
						<div className="mb-8">
							<h2 className="text-h3-bold text-gray-90 mb-4">현재 등록된 싫어하는 음식</h2>
							<div className="flex min-h-[60px] flex-wrap items-center gap-2">
								{selectedFoods.length > 0 ? (
									selectedFoods.map((food) => (
										<div
											key={food}
											className="border-gray-30 flex items-center rounded-[24px] border px-[24px] py-[16px]"
											style={{ border: '1px solid #E0E0E0' }}
										>
											<span className="text-b2-medium text-gray-70">{food}</span>
											<button
												onClick={() => handleToggle(food)}
												className="ml-2 text-gray-400 hover:text-gray-600"
											>
												×
											</button>
										</div>
									))
								) : (
									<p className="text-b2-medium text-gray-40">등록된 음식이 없습니다.</p>
								)}
							</div>
						</div>
					</div>

					{/* 오른쪽 버튼 */}
					<div className="flex h-full flex-col justify-end">
						<button
							className="text-orange flex items-center font-medium"
							disabled={selectedFoods.length === 0}
						>
							다음단계
							<Icon.ArrowRight />
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default DislikedFoodSurvey
