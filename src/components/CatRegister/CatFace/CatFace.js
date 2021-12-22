import axiosInstance from 'api/customAxios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './CatFace.scss';
import Background from 'images/yulmu2.jpg';

const CatFace = (props) => {
	const { markedImg, catMark, setCatMark } = props;
	const user = useSelector((state) => state.auth.user);
	//고양이 원본이미지
	const [catImg, setCatImg] = useState([]);
	//고양이 얼굴 좌표값

	const [mouseDownCnt, setMouseDownCnt] = useState(0);

	useEffect(() => {
		console.log('CatFace 모달입니다~~~');
	}, []);
  
  const handleInitialization = () => {
    document.getElementById('marker1').style.display = 'none';
    document.getElementById('marker2').style.display = 'none';
    document.getElementById('marker3').style.display = 'none';
    document.getElementById('marker4').style.display = 'none';
    setCatFace({
      ...catFace,
      leftEyeX: 0,
      leftEyeY: 0,
      leftEarX: 0,
      leftEarY: 0,
      rightEyeX: 0,
      rightEyeY: 0,
      rightEarX: 0,
      rightEarY: 0,
    });
    setMouseDownCnt(0);
  };

	const getLoc = (e) => {
		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;
		console.log(x, y);

		if (mouseDownCnt === 0) {
			//왼쪽귀
			document.getElementById('marker1').style.left = x + 'px';
			document.getElementById('marker1').style.top = y + 'px';
			document.getElementById('marker1').style.display = 'inline-block';
			setCatMark({ ...catMark, leftEarX: x, leftEarY: y });
			setMouseDownCnt(mouseDownCnt + 1);
			document.getElementById('catface-description').innerText =
				'왼쪽 눈 앞부분을 찍어주세요!';
		} else if (mouseDownCnt === 1) {
			//왼쪽눈
			document.getElementById('marker2').style.left = x + 'px';
			document.getElementById('marker2').style.top = y + 'px';
			document.getElementById('marker2').style.display = 'inline-block';
			setCatMark({ ...catMark, leftEyeX: x, leftEyeY: y });
			setMouseDownCnt(mouseDownCnt + 1);
			document.getElementById('catface-description').innerText =
				'오른쪽 귀 앞부분을 찍어주세요!';
		} else if (mouseDownCnt === 2) {
			//오른쪽귀
			document.getElementById('marker3').style.left = x + 'px';
			document.getElementById('marker3').style.top = y + 'px';
			document.getElementById('marker3').style.display = 'inline-block';
			setCatMark({ ...catMark, rightEarX: x, rightEarY: y });
			setMouseDownCnt(mouseDownCnt + 1);
			document.getElementById('catface-description').innerText =
				'오른쪽 눈 앞부분을 찍어주세요!';
		} else if (mouseDownCnt === 3) {
			//오른쪽눈
			document.getElementById('marker4').style.left = x + 'px';
			document.getElementById('marker4').style.top = y + 'px';
			document.getElementById('marker4').style.display = 'inline-block';
			setCatMark({ ...catMark, rightEyeX: x, rightEyeY: y });
			setMouseDownCnt(mouseDownCnt + 1);
			document.getElementById('catface-description').innerText = '완성!😻';
		}
	};

	return (
		<div className='content-container'>
			<div className='catface-background-sample-container'>
				<img
					id='catface-sample'
					className='catface-background-sample'
					src={require('images/catface_sample.png').default}
					alt='좌표찍을 고양이_sample'
				/>
			</div>
			<div className='catface-description-container'>
        <div id='catface-description' className='catface-description'>
          왼쪽 귀 앞부분을 찍어주세요!
        </div>
        <button
          className='catface-markerInit-btn'
          onClick={handleInitialization}
        >
          마커 초기화
        </button>
      </div>
			<div
				className='catface-background'
				onClick={getLoc}
				style={{ backgroundImage: `url(${markedImg})` }}>
				<span id='marker1' className='catface-marker' alt='마커1' />
				<span id='marker2' className='catface-marker' alt='마커2' />
				<span id='marker3' className='catface-marker' alt='마커3' />
				<span id='marker4' className='catface-marker' alt='마커4' />
			</div>
			{/* <div className='catface-marker-btn-container'>
				<button className='catface-marker-btn' onClick={handleSubmit}>
					이 사진을 이용하겠습니다
				</button>
			</div> */}
		</div>
	);
};

export default CatFace;
