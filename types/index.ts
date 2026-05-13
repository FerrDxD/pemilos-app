// types/index.ts

export interface Candidate {
  id: string;
  sequence_number: number;
  chairman_name: string;
  vice_chairman_name: string;
  vision: string;
  mission: string;
  photo_url: string;
}

export interface Voter {
  id: string;
  token: string;
  is_used: boolean;
  created_at: string;
}

export interface Vote {
  id: string;
  voter_id: string;
  candidate_id: string;
  created_at: string;
}