// composables/useVoting.ts


import { useState } from 'nuxt/app';
import type { Candidate, Voter } from '../types';

export const useVoting = () => {
  // @ts-ignore: Editor belum memuat auto-imports Nuxt
  const supabase = useSupabaseClient();
  const currentVoter = useState<Voter | null>('currentVoter', () => null);
  // ...

  /**
   * Login menggunakan Token
   */
  const loginWithToken = async (token: string) => {
    try {
      const { data, error } = await supabase
        .from('voters')
        .select('*')
        .eq('token', token)
        .single();

      if (error) throw new Error('Token tidak valid atau tidak ditemukan.');
      if (data.is_used) throw new Error('Token ini sudah digunakan untuk memilih.');

      currentVoter.value = data as Voter;
      return { success: true, message: 'Token valid.' };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  };

  /**
   * Mengambil daftar Pasangan Calon (Kandidat)
   */
  const fetchCandidates = async () => {
    try {
      const { data, error } = await supabase
        .from('candidates')
        .select('*')
        .order('sequence_number', { ascending: true });

      if (error) throw error;
      return data as Candidate[];
    } catch (err: any) {
      console.error('Gagal mengambil data kandidat:', err.message);
      return [];
    }
  };

  /**
   * Mengirimkan Suara (Submit Vote)
   */
  const submitVote = async (candidateId: string) => {
    if (!currentVoter.value) return { success: false, message: 'Anda belum login.' };

    try {
      // 1. Masukkan data ke tabel votes
      const { error: voteError } = await supabase
        .from('votes')
        .insert({
          voter_id: currentVoter.value.id,
          candidate_id: candidateId,
        });

      if (voteError) throw new Error('Gagal mengirim suara. Anda mungkin sudah memilih.');

      // 2. Tandai token sebagai is_used = true
      const { error: updateError } = await supabase
        .from('voters')
        .update({ is_used: true })
        .eq('id', currentVoter.value.id);

      if (updateError) throw new Error('Gagal memperbarui status token.');

      // 3. Hapus sesi setelah berhasil
      currentVoter.value = null;

      return { success: true, message: 'Suara berhasil dikirim! Terima kasih.' };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  };

  /**
   * Logout (Menghapus sesi token dari state)
   */
  const logout = () => {
    currentVoter.value = null;
  };

  return {
    currentVoter,
    loginWithToken,
    fetchCandidates,
    submitVote,
    logout
  };
};