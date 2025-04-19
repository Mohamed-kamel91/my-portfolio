import { renderHook, waitFor } from '@/test/test-utils';
import { useMounted } from './useMounted';

describe('useMounted', () => {
  it('should set state to true after mount', async () => {
    const { result } = renderHook(() => useMounted());

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
