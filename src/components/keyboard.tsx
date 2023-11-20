import { createSignal } from "solid-js";

type KeyProps = {
  id: string,
  label: string,
  x: number,
  y: number,
  width?: number,
  height?: number,
};

const defaultKeyProps = {
  width: 1,
  height: 1,
};

export function Key(props: KeyProps) {
  const {
    id, label,
    x, y, width, height,
  } = {...defaultKeyProps, ...props};
  const scale = 10;
  const [color, setColor] = createSignal(Math.random() * 255);
  return (
    <path
      id={id}
      style={`fill: rgb(${color()},${color()},${color()});`}
      d={`
        M ${x * scale},${y * scale}
        h ${width * scale} v ${height * scale} h ${-width * scale} Z
      `}
      onClick={() => setColor(Math.random() * 255)}
    />
  );
}

export function Keyboard() {
  return (
    <svg
      width="150mm"
      height="50mm"
      viewBox="0 0 150 50"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g id="keyboard">
        <Key id="key_escape" label="Esc" x={0} y={0} />
        <Key id="key_1" label="1" x={1} y={0} />
        <Key id="key_2" label="2" x={2} y={0} />
        <Key id="key_3" label="3" x={3} y={0} />
        <Key id="key_4" label="4" x={4} y={0} />
        <Key id="key_5" label="5" x={5} y={0} />
        <Key id="key_6" label="6" x={6} y={0} />
        <Key id="key_7" label="7" x={7} y={0} />
        <Key id="key_8" label="8" x={8} y={0} />
        <Key id="key_9" label="9" x={9} y={0} />
        <Key id="key_0" label="0" x={10} y={0} />
        <Key id="key_minus" label="-" x={11} y={0} />
        <Key id="key_equals" label="=" x={12} y={0} />
        <Key id="key_backspace" label="Backspace" x={13} y={0} width={2} />
        <Key id="key_tab" label="Tab" x={0} y={1} width={1.5} />
        <Key id="key_q" label="Q" x={1.5} y={1} />
        <Key id="key_w" label="W" x={2.5} y={1} />
        <Key id="key_e" label="E" x={3.5} y={1} />
        <Key id="key_r" label="R" x={4.5} y={1} />
        <Key id="key_t" label="T" x={5.5} y={1} />
        <Key id="key_y" label="Y" x={6.5} y={1} />
        <Key id="key_u" label="U" x={7.5} y={1} />
        <Key id="key_i" label="I" x={8.5} y={1} />
        <Key id="key_o" label="O" x={9.5} y={1} />
        <Key id="key_p" label="P" x={10.5} y={1} />
        <Key id="key_left_bracket" label="[" x={11.5} y={1} />
        <Key id="key_right_bracket" label="]" x={12.5} y={1} />
        <Key id="key_back_slash" label="\" x={13.5} y={1} width={1.5} />
        <Key id="key_caps_lock" label="Caps Lock" x={0} y={2} width={1.75} />
        <Key id="key_a" label="A" x={1.75} y={2} />
        <Key id="key_s" label="S" x={2.75} y={2} />
        <Key id="key_d" label="D" x={3.75} y={2} />
        <Key id="key_f" label="F" x={4.75} y={2} />
        <Key id="key_g" label="G" x={5.75} y={2} />
        <Key id="key_h" label="H" x={6.75} y={2} />
        <Key id="key_j" label="J" x={7.75} y={2} />
        <Key id="key_k" label="K" x={8.75} y={2} />
        <Key id="key_l" label="L" x={9.75} y={2} />
        <Key id="key_semicolon" label=";" x={10.75} y={2} />
        <Key id="key_apostrophe" label="'" x={11.75} y={2} />
        <Key id="key_enter" label="Enter" x={12.75} y={2} width={2.25} />
        <Key id="key_left_shift" label="Shift" x={0} y={3} width={2.25} />
        <Key id="key_z" label="Z" x={2.25} y={3} />
        <Key id="key_x" label="X" x={3.25} y={3} />
        <Key id="key_c" label="C" x={4.25} y={3} />
        <Key id="key_v" label="V" x={5.25} y={3} />
        <Key id="key_b" label="B" x={6.25} y={3} />
        <Key id="key_n" label="N" x={7.25} y={3} />
        <Key id="key_m" label="M" x={8.25} y={3} />
        <Key id="key_comma" label="," x={9.25} y={3} />
        <Key id="key_period" label="." x={10.25} y={3} />
        <Key id="key_forward_slash" label="/" x={11.25} y={3} />
        <Key id="key_right_shift" label="Shift" x={12.25} y={3} width={2.75} />
        <Key id="key_left_control" label="Ctrl" x={0} y={4} width={1.5} />
        <Key id="key_left_windows" label="Win" x={1.5} y={4} />
        <Key id="key_left_alt" label="Alt" x={2.5} y={4} width={1.5} />
        <Key id="key_space" label="Space" x={4} y={4} width={6} />
        <Key id="key_right_alt" label="Alt" x={10} y={4} width={1.5} />
        <Key id="key_right_win" label="Win" x={11.5} y={4} />
        <Key id="key_menu" label="Menu" x={12.5} y={4} />
        <Key id="key_ctrl" label="Ctrl" x={13.5} y={4} width={1.5} />
      </g>
    </svg>
  );
}