'use client'

import React, { useState } from 'react'
import { AllergyCard } from '@/shared/components/AllergyCard'

const ALLERGY_LIST = [
	{ label: '견과류', description: '땅콩, 아몬드, 호두 등' },
	{ label: '해산물', description: '새우, 게, 조개류 등' },
	{ label: '유제품', description: '우유, 치즈, 버터 등' },
	{ label: '계란', description: '달걀 및 달걀 제품' },
	{ label: '글루텐', description: '밀, 보리, 호밀 등' },
	{ label: '콩', description: '대두 및 콩 제품' },
	{ label: '생선', description: '모든 종류의 생선' },
	{ label: '조개류', description: '굴, 홍합, 전복 등' },
	{ label: '참깨', description: '참깨 및 참기름' },
	{ label: '아황산염', description: '와인, 건과일 등의 방부제' },
	{ label: 'MSG', description: '글루탐산나트륨' },
	{ label: '인공색소', description: '타르색소 등' },
]

export const AllergySurvey: React.FC = () => {
	const [checked, setChecked] = useState<boolean[]>(Array(12).fill(false))

	const handleToggle = (idx: number) => {
		setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)))
	}

	const isAnyChecked = checked.some(Boolean)

	return (
		<>
			{/* 본문 */}
			<main className="mx-auto flex h-[calc(100vh-110px)] w-full max-w-5xl flex-1 flex-col items-center gap-[48px] overflow-auto pb-10 pb-[90px]">
				<div className="flex h-[82px] flex-col items-center gap-4">
					<div className="text-h2-bold text-center">현재 알레르기를 겪고 있는 식재료가 있나요?</div>
					<div className="text-b2-medium text-gray-30 mb-8 text-center" style={{ height: 54 }}>
						(해당 사항에 모두 체크해주세요. 알레르기가 없으시면 견과류를 눌러주세요)
					</div>
				</div>
				<div className="flex h-full w-full flex-1 items-end gap-4">
					{/* 왼쪽 버튼 */}
					<div className="flex h-full flex-col justify-end">
						<button className="text-orientation-mixed bg-transparent font-medium text-orange-500">
							건너뛰기
						</button>
					</div>

					{/* 중앙 그리드 */}
					<div className="grid h-full w-full flex-1 gap-[24px] overflow-y-auto md:grid-cols-1 lg:grid-cols-2">
						{ALLERGY_LIST.map((item, idx) => (
							<AllergyCard
								key={item.label}
								checked={checked[idx]}
								label={item.label}
								description={item.description}
								onClick={() => handleToggle(idx)}
							/>
						))}
					</div>

					{/* 오른쪽 버튼 */}
					<div className="flex h-full flex-col justify-end">
						<button
							className={`flex items-center font-medium transition ${
								isAnyChecked
									? 'text-orange-500 hover:text-orange-600'
									: 'cursor-not-allowed text-gray-300'
							}`}
							disabled={!isAnyChecked}
						>
							다음단계
							<svg className="ml-1" width="20" height="20" fill="none" viewBox="0 0 20 20">
								<path
									d="M8 5l5 5-5 5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</main>
		</>
	)
}
