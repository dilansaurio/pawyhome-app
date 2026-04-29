import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import Svg, { Circle, Ellipse, G, Line, Path } from "react-native-svg";

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

const ease = Easing.inOut(Easing.ease);
const JS = { useNativeDriver: false as const };

// ─── CAT ─────────────────────────────────────────────────────────────────────
// Slide 1 – accent #8FE0E3
export function CatAnimation({ size = 200 }: { size?: number }) {
  const eyeRy = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    // blink
    Animated.loop(
      Animated.sequence([
        Animated.timing(eyeRy, { toValue: 8, duration: 2800, ...JS }),
        Animated.timing(eyeRy, { toValue: 1, duration: 70, ...JS }),
        Animated.timing(eyeRy, { toValue: 8, duration: 70, ...JS }),
      ]),
    ).start();
  }, []);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 200 200">
        {/* Shadow */}
        <Ellipse
          cx={100}
          cy={196}
          rx={52}
          ry={6}
          fill="#000000"
          fillOpacity={0.1}
        />
        {/* Tail – static */}
        <Path
          d="M 148 165 C 175 146 188 126 172 106"
          stroke="#B87840"
          strokeWidth={13}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M 148 165 C 175 146 188 126 172 106"
          stroke="#D4A070"
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
        />

        {/* Body – bigger */}
        <Ellipse cx={100} cy={160} rx={58} ry={46} fill="#D4A070" />
        <Ellipse cx={100} cy={165} rx={40} ry={28} fill="#EDD4A8" />

        {/* Outer ears */}
        <Path d="M 70 80 L 59 38 L 91 70 Z" fill="#D4A070" />
        <Path d="M 130 80 L 141 38 L 109 70 Z" fill="#D4A070" />
        {/* Inner ears */}
        <Path d="M 74 74 L 67 50 L 86 66 Z" fill="#FFB3C1" />
        <Path d="M 126 74 L 133 50 L 114 66 Z" fill="#FFB3C1" />

        {/* Head – smaller */}
        <Circle cx={100} cy={98} r={36} fill="#D4A070" />

        {/* Eyes */}
        <AnimatedEllipse
          cx={86}
          cy={94}
          rx={8}
          ry={eyeRy as unknown as number}
          fill="#1A1A2E"
        />
        <AnimatedEllipse
          cx={114}
          cy={94}
          rx={8}
          ry={eyeRy as unknown as number}
          fill="#1A1A2E"
        />
        <Circle cx={88} cy={92} r={2.5} fill="white" />
        <Circle cx={116} cy={92} r={2.5} fill="white" />

        {/* Nose */}
        <Path d="M 97 108 L 103 108 L 100 113 Z" fill="#E07090" />

        {/* Mouth */}
        <Path
          d="M 100 113 Q 93 118 89 115"
          stroke="#B0806A"
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M 100 113 Q 107 118 111 115"
          stroke="#B0806A"
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <Line
          x1={94}
          y1={109}
          x2={58}
          y2={104}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <Line
          x1={94}
          y1={111}
          x2={58}
          y2={111}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <Line
          x1={94}
          y1={113}
          x2={58}
          y2={118}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <Line
          x1={106}
          y1={109}
          x2={142}
          y2={104}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <Line
          x1={106}
          y1={111}
          x2={142}
          y2={111}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <Line
          x1={106}
          y1={113}
          x2={142}
          y2={118}
          stroke="#B0806A"
          strokeWidth={1.2}
          opacity={0.5}
        />
      </Svg>
    </View>
  );
}

// ─── RABBIT ───────────────────────────────────────────────────────────────────
// Slide 2 – accent #FFCD5E
export function RabbitAnimation({ size = 200 }: { size?: number }) {
  const earBounce = useRef(new Animated.Value(0)).current;
  const eyeRy = useRef(new Animated.Value(6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(earBounce, {
          toValue: -7,
          duration: 380,
          easing: ease,
          ...JS,
        }),
        Animated.timing(earBounce, {
          toValue: 0,
          duration: 380,
          easing: ease,
          ...JS,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(eyeRy, { toValue: 6, duration: 2600, ...JS }),
        Animated.timing(eyeRy, { toValue: 1, duration: 70, ...JS }),
        Animated.timing(eyeRy, { toValue: 6, duration: 70, ...JS }),
      ]),
    ).start();
  }, []);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 200 200">
        {/* Shadow */}
        <Ellipse
          cx={100}
          cy={196}
          rx={50}
          ry={6}
          fill="#000000"
          fillOpacity={0.1}
        />
        {/* Tail */}
        <Circle cx={58} cy={172} r={12} fill="#DDD4C8" />
        <Circle cx={58} cy={171} r={8} fill="white" />

        {/* Body */}
        <Ellipse cx={100} cy={158} rx={46} ry={40} fill="#E8E0D4" />
        <Ellipse cx={100} cy={163} rx={28} ry={24} fill="white" />

        {/* Ears – bounce up together */}
        <AnimatedG translateY={earBounce as unknown as number}>
          <Ellipse cx={80} cy={52} rx={14} ry={36} fill="#E8E0D4" />
          <Ellipse cx={120} cy={48} rx={14} ry={36} fill="#E8E0D4" />
          <Ellipse cx={80} cy={54} rx={8} ry={26} fill="#FFB3C1" />
          <Ellipse cx={120} cy={50} rx={8} ry={26} fill="#FFB3C1" />
        </AnimatedG>

        {/* Head – covers ear bases */}
        <Circle cx={100} cy={108} r={40} fill="#E8E0D4" />

        {/* Eyes */}
        <AnimatedEllipse
          cx={89}
          cy={102}
          rx={7}
          ry={eyeRy as unknown as number}
          fill="#2D1A4A"
        />
        <AnimatedEllipse
          cx={111}
          cy={102}
          rx={7}
          ry={eyeRy as unknown as number}
          fill="#2D1A4A"
        />
        <Circle cx={90} cy={100} r={2.5} fill="white" />
        <Circle cx={112} cy={100} r={2.5} fill="white" />

        {/* Nose */}
        <Ellipse cx={100} cy={115} rx={5} ry={3.5} fill="#E07090" />

        {/* Mouth */}
        <Path
          d="M 100 118 Q 94 123 91 120"
          stroke="#B090A0"
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M 100 118 Q 106 123 109 120"
          stroke="#B090A0"
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

// ─── DOG ──────────────────────────────────────────────────────────────────────
// Slide 3 – accent #F9A559
export function DogAnimation({ size = 200 }: { size?: number }) {
  const eyeRy = useRef(new Animated.Value(7)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(eyeRy, { toValue: 7, duration: 3200, ...JS }),
        Animated.timing(eyeRy, { toValue: 1, duration: 70, ...JS }),
        Animated.timing(eyeRy, { toValue: 7, duration: 70, ...JS }),
      ]),
    ).start();
  }, []);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 200 200">
        {/* Shadow */}
        <Ellipse
          cx={100}
          cy={196}
          rx={50}
          ry={6}
          fill="#000000"
          fillOpacity={0.1}
        />

        {/* Tail – static */}
        <Path
          d="M 148 163 C 170 142 180 120 164 100"
          stroke="#9A5F28"
          strokeWidth={13}
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M 148 163 C 170 142 180 120 164 100"
          stroke="#C48040"
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
        />

        {/* Body */}
        <Ellipse cx={100} cy={155} rx={52} ry={42} fill="#C48040" />
        <Ellipse cx={100} cy={162} rx={32} ry={26} fill="#D4A060" />

        {/* Floppy ears (behind head) */}
        <Ellipse
          cx={60}
          cy={106}
          rx={20}
          ry={34}
          fill="#9A5F28"
          rotation={-14}
          originX={60}
          originY={106}
        />
        <Ellipse
          cx={140}
          cy={106}
          rx={20}
          ry={34}
          fill="#9A5F28"
          rotation={14}
          originX={140}
          originY={106}
        />

        {/* Head */}
        <Circle cx={100} cy={96} r={44} fill="#C48040" />

        {/* Snout */}
        <Ellipse cx={100} cy={113} rx={22} ry={14} fill="#D4A060" />

        {/* Nose */}
        <Ellipse cx={100} cy={106} rx={12} ry={8} fill="#1A1A1A" />
        <Circle cx={96} cy={104} r={3} fill="#333" />

        {/* Eyes */}
        <AnimatedEllipse
          cx={83}
          cy={87}
          rx={9}
          ry={eyeRy as unknown as number}
          fill="#1A1A1A"
        />
        <AnimatedEllipse
          cx={117}
          cy={87}
          rx={9}
          ry={eyeRy as unknown as number}
          fill="#1A1A1A"
        />
        <Circle cx={85} cy={85} r={3} fill="white" />
        <Circle cx={119} cy={85} r={3} fill="white" />

        {/* Tongue – static */}
        <Ellipse cx={100} cy={126} rx={10} ry={12} fill="#E07090" />
        <Line
          x1={100}
          y1={118}
          x2={100}
          y2={135}
          stroke="#C05878"
          strokeWidth={2}
          opacity={0.6}
        />
      </Svg>
    </View>
  );
}
