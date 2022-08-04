import ProgressiveImage from '../components/ProgressiveImage';
import high from '../components/high-res.jpg';
import low from '../components/low-res.jpg';

export default function testImage() {
  return (
    <div>
      <ProgressiveImage
        src={high}
        placeholderSrc={low}
        width='700'
        height='465'
      />
    </div>
  );
}
