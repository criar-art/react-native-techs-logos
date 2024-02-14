import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg preserveAspectRatio="xMinYMin meet" viewBox="-85 0 256 244" {...props}>
    <Path
      fill="#000"
      d="M32.167 98.573c2.9 0 5.246.396 7.028 1.19 1.782.792 2.672 1.78 2.672 2.97 0 1.453-.366 3.101-1.09 4.948-.727 1.848-1.42 3.364-2.079 4.552-.265.265-.593.297-.989.1-.396-.199-.595-.56-.595-1.089.397-.921.595-2.242.595-3.96 0-1.846-.495-3.366-1.485-4.552-.989-1.188-2.344-1.781-4.057-1.781-2.246 0-4.058.692-5.444 2.078-1.385 1.385-2.078 3.334-2.078 5.837 0 2.114.559 4.127 1.682 6.038a69.666 69.666 0 0 0 3.761 5.742 56.847 56.847 0 0 1 3.86 6.137c1.188 2.178 1.782 4.652 1.782 7.423 0 4.749-1.914 8.444-5.74 11.082-3.828 2.643-8.843 3.96-15.043 3.96-4.487 0-8.017-.725-10.59-2.177-2.575-1.45-3.86-3.032-3.86-4.75 0-.525.197-1.253.593-2.178.396-.921.922-1.91 1.585-2.97a45.614 45.614 0 0 1 2.178-3.168c.791-1.054 1.647-1.91 2.572-2.57.396-.265.759-.201 1.09.196.328.396.362.792.1 1.188-.793.79-1.385 1.617-1.783 2.475-.396.857-.594 2.014-.594 3.463 0 2.374.792 4.324 2.377 5.837 1.583 1.52 3.627 2.278 6.135 2.278 3.43 0 6.102-.957 8.017-2.87 1.912-1.911 2.87-4.256 2.87-7.028 0-2.506-.562-4.849-1.683-7.026a76.243 76.243 0 0 0-3.661-6.335 83.818 83.818 0 0 1-3.663-6.237 14.104 14.104 0 0 1-1.682-6.73c0-3.428 1.45-6.3 4.355-8.608 2.899-2.304 7.188-3.465 12.864-3.465zm54.036.993c.66.264.924.629.794 1.09-.135.463-.727.824-1.783 1.088-1.98 0-4.255.068-6.828.197-2.575.132-5.315.332-8.215.593-2.643 6.469-4.819 12.767-6.533 18.905-1.717 6.135-2.572 11.118-2.572 14.945 0 4.485 1.712 6.727 5.145 6.727 3.43 0 7.257-2.967 11.483-8.904.394-.265.757-.265 1.086 0 .329.264.428.724.299 1.385a35.851 35.851 0 0 1-8.512 9.601c-3.433 2.706-6.798 4.056-10.095 4.056-3.434 0-5.973-.82-7.621-2.474-1.651-1.65-2.475-3.925-2.475-6.83 0-3.824.922-9.105 2.77-15.835 1.848-6.73 4.223-13.588 7.128-20.586-3.434.396-6.6.929-9.501 1.585-.662-.128-.828-.46-.496-.99.328-.525.922-1.089 1.782-1.682.855-.596 1.88-1.121 3.067-1.585 1.187-.46 2.309-.692 3.365-.692h1.584c.527 0 1.056-.065 1.584-.197a214.313 214.313 0 0 1 5.344-11.086c1.847-3.564 3.693-6.794 5.543-9.7.79-.922 1.88-1.747 3.265-2.475 1.385-.722 2.738-1.285 4.057-1.682 1.318-.396 2.407-.625 3.268-.693.856-.064 1.217.168 1.09.693-2.247 3.434-4.454 7.259-6.633 11.481a206.783 206.783 0 0 0-6.235 13.262 147.12 147.12 0 0 1 7.62-.197h7.225z"
    />
    <Path
      fill="#B3D107"
      d="M206.299.528c1.979 0 3.593.496 4.85 1.485 1.251.989 2.109 2.31 2.572 3.96.462 1.649.526 3.53.198 5.641-.33 2.113-1.088 4.224-2.276 6.334-.265.264-.594.264-.99 0-.395-.265-.66-.593-.791-.99.263-1.584-.296-2.902-1.683-3.959-1.385-1.054-3.532-1.584-6.433-1.584-5.412 0-10.855 2.013-16.33 6.038-5.477 4.027-10.789 9.34-15.934 15.934-5.147 6.6-9.965 14.19-14.45 22.765a215.382 215.382 0 0 0-11.68 26.524c-3.298 9.105-5.907 18.145-7.818 27.118-1.913 8.976-2.868 17.155-2.868 24.547 0 3.956 1.12 5.937 3.365 5.937 1.583 0 3.133-.66 4.65-1.981 1.516-1.318 3.268-3.296 5.247-5.938.395-.26.758-.228 1.087.1.329.333.428.76.299 1.285-2.643 3.96-5.741 7.259-9.305 9.897-3.562 2.642-6.798 3.96-9.699 3.96-2.508 0-4.255-.726-5.244-2.179-.989-1.45-1.485-3.295-1.485-5.54 0-6.203 1.317-13.958 3.96-23.258 2.638-9.304 6.165-19.134 10.59-29.495 4.42-10.358 9.533-20.684 15.34-30.977 5.806-10.293 11.844-19.562 18.113-27.81 6.266-8.247 12.57-14.945 18.903-20.093C194.817 3.1 200.755.528 206.3.528zM30.55 243.76c-1.98 0-3.595-.495-4.851-1.484-1.252-.989-2.11-2.31-2.573-3.96-.46-1.651-.526-3.53-.198-5.641.332-2.113 1.089-4.223 2.276-6.334.266-.266.594-.266.99 0 .395.262.66.593.791.99-.262 1.584.297 2.902 1.683 3.959 1.385 1.053 3.531 1.582 6.433 1.582 5.412 0 10.856-2.013 16.33-6.038 5.477-4.023 10.79-9.335 15.936-15.931 5.146-6.6 9.964-14.188 14.45-22.765a215.31 215.31 0 0 0 11.677-26.525c3.3-9.105 5.908-18.144 7.82-27.118 1.913-8.975 2.868-17.155 2.868-24.545 0-3.96-1.12-5.938-3.365-5.938-1.584 0-3.134.657-4.65 1.978-1.516 1.317-3.268 3.3-5.247 5.94-.395.26-.757.228-1.087-.1-.328-.332-.427-.761-.298-1.289 2.642-3.956 5.74-7.258 9.304-9.897 3.562-2.638 6.797-3.956 9.699-3.956 2.508 0 4.255.722 5.244 2.175.99 1.453 1.486 3.3 1.486 5.545 0 6.202-1.318 13.953-3.96 23.258-2.638 9.304-6.166 19.133-10.59 29.494-4.42 10.358-9.534 20.684-15.34 30.977-5.807 10.293-11.844 19.562-18.113 27.81-6.266 8.247-12.57 14.946-18.904 20.091-6.331 5.148-12.269 7.722-17.811 7.722z"
    />
    <Path
      fill="#000"
      d="M164.264 149.248c-5.543 0-8.314-3.035-8.314-9.105 0-2.11.228-4.552.692-7.322.461-2.774 1.19-5.64 2.178-8.611.99-2.971 2.142-5.97 3.463-9.009a55.473 55.473 0 0 1 4.751-8.707 65.65 65.65 0 0 0-4.155 2.87 33.104 33.104 0 0 0-3.564 3.067c-.396.268-.76.168-1.089-.296-.33-.461-.363-.89-.099-1.286 2.243-2.377 5.444-4.815 9.601-7.326 4.155-2.503 8.146-4.485 11.976-5.937.659 0 1.153.167 1.484.496.328.332.363.76.1 1.285a75.925 75.925 0 0 0-10.195 18.013c-2.573 6.468-3.86 12.738-3.86 18.805 0 3.83 1.19 5.74 3.564 5.74 1.713 0 3.825-1.154 6.333-3.463 2.507-2.31 5.148-5.344 7.92-9.107 2.77-3.76 5.572-8.016 8.412-12.765a192.034 192.034 0 0 0 7.82-14.453c.394-.789 1.55-1.582 3.462-2.374 1.913-.794 3.86-1.19 5.84-1.19s2.573.532 1.782 1.586a190.54 190.54 0 0 0-4.85 9.6 73.37 73.37 0 0 0-3.463 8.808 58.564 58.564 0 0 0-2.079 8.807c-.465 2.971-.693 6.235-.693 9.797 0 4.227 1.12 6.334 3.366 6.334 2.242 0 4.75-1.978 7.521-5.938.397-.26.793-.26 1.187 0 .397.268.527.665.397 1.189-2.245 3.431-4.72 6.037-7.423 7.82-2.706 1.78-5.18 2.67-7.422 2.67-5.544 0-8.314-3.232-8.314-9.698 0-6.73 1.186-13.393 3.562-19.994-5.016 9.105-10.293 16.331-15.834 21.676-5.545 5.348-10.232 8.018-14.057 8.018zm81.747-50.675c2.9 0 5.247.396 7.028 1.19 1.782.792 2.672 1.78 2.672 2.97 0 1.453-.365 3.101-1.088 4.948-.729 1.848-1.42 3.364-2.08 4.552-.266.265-.593.297-.99.1-.395-.199-.593-.56-.593-1.089.396-.921.594-2.242.594-3.96 0-1.846-.494-3.366-1.484-4.552-.99-1.188-2.344-1.781-4.058-1.781-2.244 0-4.057.692-5.443 2.078-1.387 1.386-2.078 3.334-2.078 5.837 0 2.114.559 4.127 1.682 6.038a69.666 69.666 0 0 0 3.761 5.742 56.847 56.847 0 0 1 3.86 6.137c1.188 2.178 1.782 4.652 1.782 7.423 0 4.749-1.914 8.444-5.74 11.082-3.83 2.643-8.844 3.96-15.044 3.96-4.489 0-8.017-.725-10.59-2.177-2.575-1.45-3.86-3.032-3.86-4.75 0-.525.197-1.253.593-2.178.396-.921.921-1.91 1.584-2.97a45.589 45.589 0 0 1 2.177-3.168c.791-1.054 1.649-1.91 2.574-2.57.396-.265.758-.201 1.088.196.328.396.363.792.1 1.188-.792.79-1.385 1.617-1.782 2.475-.396.857-.594 2.014-.594 3.463 0 2.374.792 4.324 2.376 5.837 1.584 1.52 3.627 2.278 6.136 2.278 3.429 0 6.102-.957 8.018-2.87 1.91-1.911 2.869-4.256 2.869-7.028 0-2.506-.563-4.849-1.682-7.026a76.243 76.243 0 0 0-3.662-6.335 84.256 84.256 0 0 1-3.663-6.237 14.104 14.104 0 0 1-1.682-6.73c0-3.428 1.45-6.3 4.354-8.608 2.9-2.304 7.188-3.465 12.865-3.465z"
    />
  </Svg>
);
export default SvgComponent;
