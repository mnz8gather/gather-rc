type GeneralContainerProps = React.HTMLProps<HTMLDivElement>;

// 常规容器组件
export function GeneralContainer(props: GeneralContainerProps) {
  const { style, ...restProps } = props;
  return <div style={{ border: '1px solid rgba(5, 5, 5, 0.06)', borderRadius: '6px', padding: '20px 16px', ...style }} {...restProps} />;
}
