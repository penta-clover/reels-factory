import React from 'react';

export const DailyEmotionVideo: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        position: 'relative',
        fontFamily: 'sans-serif', // 폰트는 원하는 대로 설정
      }}
    >
      {/* 상단 텍스트 */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          width: '100%',
          textAlign: 'center',
          fontSize: '48px',
        }}
      >
        4월 2일
      </div>

      {/* 중앙 텍스트 */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          width: '100%',
          textAlign: 'center',
          fontSize: '48px',
          lineHeight: 1.4,
        }}
      >
        지금 나의 감정 상태를<br />
        이모티콘으로 표현하면?
      </div>

      {/* 하단 텍스트 */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          textAlign: 'center',
          fontSize: '36px',
        }}
      >
        매일 하루 나의 감정을 기록해보세요
      </div>
    </div>
  );
};
